package de.fhg.iais.roberta.javaServer.provider;

import java.io.IOException;
import java.io.InputStream;
import java.lang.annotation.Annotation;
import java.lang.reflect.Type;

import javax.ws.rs.Consumes;
import javax.ws.rs.WebApplicationException;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.MultivaluedMap;
import javax.ws.rs.ext.MessageBodyReader;
import javax.ws.rs.ext.Provider;

import de.fhg.iais.roberta.generated.restEntities.FullRestRequest;
import de.fhg.iais.roberta.util.UtilForREST;

@Provider
@Consumes("application/json")
public class FullRestRequestProvider implements MessageBodyReader<FullRestRequest> {

    @Override
    public boolean isReadable(Class<?> type, Type genericType, Annotation[] annotations, MediaType mediaType) {
        return type == FullRestRequest.class;
    }

    @Override
    public FullRestRequest readFrom(
        Class<FullRestRequest> type,
        Type genericType,
        Annotation[] annotations,
        MediaType mediaType,
        MultivaluedMap<String, String> httpHeaders,
        InputStream entityStream)
        throws IOException,
        WebApplicationException {

        String entity = UtilForREST.convertStreamToString(entityStream);
        return FullRestRequest.makeFromString(entity);
    }
}