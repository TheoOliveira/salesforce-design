public class ControllerClassException
{
    public class ControllerClassException extends Exception{}
    
	@AuraEnabled public static RetornoComponente enviarNome(string nome)
    {
        try
        {
            return new RetornoComponente('0', false, 'O nome solicitado foi: ' + nome);
        }
        catch(Exception ex)
        {
            throw new ComponenteTesteControllerException('Erro na integração com o servidor: ' + ex.getMessage());
        }
    }
}